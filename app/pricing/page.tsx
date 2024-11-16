import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 influencer searches per month",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing agencies and brands",
      features: [
        "Up to 500 influencer searches per month",
        "Advanced analytics and reporting",
        "Priority email support",
        "Campaign management tools",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited influencer searches",
        "Custom analytics and API access",
        "Dedicated account manager",
        "White-label options",
        "24/7 phone and email support",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Choose the perfect plan for your influencer marketing needs
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl
              ${index === 1 ? "border-primary" : "hover:border-primary/50"}
            `}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full transition-colors duration-300 hover:bg-primary/90"
              >
                {index === 2 ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
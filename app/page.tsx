import { Search, Filter, User, MapPin, Hash, BarChart2, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const influencers = [
    { name: 'FitnessPro', followers: '50K', engagementRate: '5.2%', location: 'New York', niche: 'Fitness' },
    { name: 'FoodieExplorer', followers: '100K', engagementRate: '4.8%', location: 'Los Angeles', niche: 'Food' },
    { name: 'TechGuru', followers: '75K', engagementRate: '3.9%', location: 'San Francisco', niche: 'Technology' },
  ]

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Instagram Influencer Discovery</h1>
        <p className="text-muted-foreground">Find the perfect influencers for your campaign</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search influencers, hashtags, or locations"
              className="pl-10 w-full"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Influencer Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nano">Nano (1K-10K)</SelectItem>
              <SelectItem value="micro">Micro (10K-100K)</SelectItem>
              <SelectItem value="macro">Macro (100K-1M)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> More Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {influencers.map((influencer, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{influencer.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center"><User className="mr-1 h-4 w-4" /> {influencer.followers} followers</span>
                    <span className="flex items-center"><BarChart2 className="mr-1 h-4 w-4" /> {influencer.engagementRate} engagement</span>
                    <span className="flex items-center"><MapPin className="mr-1 h-4 w-4" /> {influencer.location}</span>
                    <span className="flex items-center"><Hash className="mr-1 h-4 w-4" /> {influencer.niche}</span>
                  </div>
                </div>
                <Button size="sm">View Profile</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
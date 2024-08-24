import { Artist } from "./Artist"
import { Community } from "./Community/Community"
import { Company } from "./Company"
import { ExtraArtist } from "./ExtraArtist"
import { Format } from "./Format"
import { Identifier } from "./Identifier"
import { Image } from "./Image"
import { Label } from "./Label"
import { TrackList } from "./TrackList"
import { Video } from "./Video"

export type DiscogsRecord = {
    id: number
    status: string
    year: number
    resource_url: string
    uri: string
    artists: Artist[]
    artists_sort: string
    labels: Label[]
    series: any[]
    companies: Company[]
    formats: Format[]
    data_quality: string
    community: Community
    format_quantity: number
    date_added: string
    date_changed: string
    num_for_sale: number
    lowest_price: number
    master_id: number
    master_url: string
    title: string
    country: string
    released: string
    notes: string
    released_formatted: string
    identifiers: Identifier[]
    videos: Video[]
    genres: string[]
    styles: string[]
    tracklist: TrackList[]
    extraartists: ExtraArtist[]
    images: Image[]
    thumb: string
    estimated_weight: number
    blocked_from_sale: boolean
  }
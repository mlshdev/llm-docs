> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/marker/init(_:monogram:coordinate:)-2ojcy](https://developer.apple.com/documentation/mapkit/marker/init(_:monogram:coordinate:)-2ojcy)

# init(\_:monogram:coordinate:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a marker at the given location with the provided title key and monogram.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleKey: LocalizedStringKey, monogram: Text, coordinate: CLLocationCoordinate2D) where Label == Label<Text, Text>
```

## Parameters

- `titleKey`: The localized string key to use to lookup the title.
- `monogram`: A [Text](https://developer.apple.com/documentation/swiftui/text) view that contains up to three characters to display on the marker’s balloon.
- `coordinate`: The coordinate used to display the marker.

## See Also

### Creating a marker

- [init(\_:coordinate:)](init%28__coordinate_%29-82942.md): Creates a marker at the given location with the label you provide.
- [init(\_:image:coordinate:)](init%28__image_coordinate_%29-36l1p.md): Creates a marker at the given location with the provided title and image resource to display as the balloon’s icon.
- [init(\_:systemImage:coordinate:)](init%28__systemimage_coordinate_%29-50yl4.md): Creates a marker at the given location with the provided title and a system image the map displays as the balloon’s icon.
- [init(\_:coordinate:)](init%28__coordinate_%29-8wxlv.md): Creates a marker at the given location with the localized string key you provide.
- [init(\_:image:coordinate:)](init%28__image_coordinate_%29-28mge.md): Creates a marker at the given location with the provided localized title and image resource to display as the balloon’s icon.
- [init(\_:monogram:coordinate:)](init%28__monogram_coordinate_%29-21hql.md): Creates a marker at the given location with the provided title string and monogram.
- [init(\_:systemImage:coordinate:)](init%28__systemimage_coordinate_%29-2t4i0.md): Creates a marker at the given location with a localized title, and a system image the map displays as the balloon’s icon.
- [init(coordinate:label:)](init%28coordinate_label_%29.md): Creates a marker at the given location with the provided label.
- [init(item:)](init%28item_%29.md): Creates a marker for a given map item using a MapKit-provided label.

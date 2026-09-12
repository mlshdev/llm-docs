> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsondecoder/decode(_:)](https://developer.apple.com/documentation/mapkit/mkgeojsondecoder/decode(_:))

# decode(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decodes the provided data into native MapKit types that a map can display.

## Declaration

```swift
func decode(_ data: Data) throws -> [any MKGeoJSONObject]
```

## Parameters

- `data`: An [NSData](../../foundation/nsdata.md) object that contains the JSON to decode.

<a id="return-value"></a>

## Return Value

An array of [MKGeoJSONObject](../mkgeojsonobject.md) objects, or an error if the decoder encounters an issue.

# geoJSONObjectsWithData:error: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decodes the provided data into native MapKit types that a map can display.

## Declaration

```objectivec
- (NSArray<id<MKGeoJSONObject>> *) geoJSONObjectsWithData:(NSData *) data error:(NSError **) errorPtr;
```

## Parameters

- `data`: An [NSData](../../foundation/nsdata.md) object that contains the JSON to decode.
- `errorPtr`: In Objective-C, provide a pointer to an [NSError](../../foundation/nserror.md) object.

<a id="return-value"></a>

## Return Value

An array of [MKGeoJSONObject](../mkgeojsonobject.md) objects, or an error if the decoder encounters an issue.

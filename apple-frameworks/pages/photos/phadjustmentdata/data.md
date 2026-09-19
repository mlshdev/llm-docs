> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phadjustmentdata/data

# data (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Data that contains the information necessary to reconstruct the adjustment.

## Declaration

```swift
var data: Data { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to resume working with the last edit that was made to an asset. For example, if your app applies Core Image filters to photos, this property may hold a serialized property list that describes the filters and their parameters. Use the [formatIdentifier](formatidentifier.md) and [formatVersion](formatversion.md) properties to determine whether the adjustment data saved with an asset is in a format that your app can understand.

# data (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Data that contains the information necessary to reconstruct the adjustment.

## Declaration

```objectivec
@property (strong, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

Use this property to resume working with the last edit that was made to an asset. For example, if your app applies Core Image filters to photos, this property may hold a serialized property list that describes the filters and their parameters. Use the [formatIdentifier](formatidentifier.md) and [formatVersion](formatversion.md) properties to determine whether the adjustment data saved with an asset is in a format that your app can understand.

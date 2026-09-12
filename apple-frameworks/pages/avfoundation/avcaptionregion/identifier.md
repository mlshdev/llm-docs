> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/identifier](https://developer.apple.com/documentation/avfoundation/avcaptionregion/identifier)

# identifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A string that identifies the region.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The system considers two regions the same if their region identifier is equal. Your app needs to ensure that equal caption regions have the same property values.

If this value is `nil`, the system instead treats two regions equal if their `position` and `endPosition` are the same. Captions referring to these regions belong to the same region when the system serializes them to a format like TTML.

# identifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A string that identifies the region.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The system considers two regions the same if their region identifier is equal. Your app needs to ensure that equal caption regions have the same property values.

If this value is `nil`, the system instead treats two regions equal if their `position` and `endPosition` are the same. Captions referring to these regions belong to the same region when the system serializes them to a format like TTML.

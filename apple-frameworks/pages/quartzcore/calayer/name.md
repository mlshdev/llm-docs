> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/calayer/name

# name (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The name of the receiver.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The layer name is used by some layout managers to identify a layer. The default value of this property is `nil`.

# name (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The name of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The layer name is used by some layout managers to identify a layer. The default value of this property is `nil`.

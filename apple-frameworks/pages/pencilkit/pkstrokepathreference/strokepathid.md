> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/strokepathid

# strokePathID (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The unique identity of the stroke path.

## Declaration

```swift
var strokePathID: UUID { get }
```

<a id="discussion"></a>

## Discussion

> **Warning**

> Using multiple stroke paths with identical IDs but different control points will result in undefined rendering behavior. Ensure each stroke path has a unique identifier.

# strokePathID (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The unique identity of the stroke path.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * strokePathID;
```

<a id="discussion"></a>

## Discussion

> **Warning**

> Using multiple stroke paths with identical IDs but different control points will result in undefined rendering behavior. Ensure each stroke path has a unique identifier.

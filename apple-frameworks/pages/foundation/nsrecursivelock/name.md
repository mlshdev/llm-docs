> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsrecursivelock/name

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name associated with the receiver.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use a name string to identify a lock within your code. Cocoa also uses this name as part of any error descriptions involving the receiver.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name associated with the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

You can use a name string to identify a lock within your code. Cocoa also uses this name as part of any error descriptions involving the receiver.

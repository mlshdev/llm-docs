> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssecurecoding/supportssecurecoding](https://developer.apple.com/documentation/foundation/nssecurecoding/supportssecurecoding)

# supportsSecureCoding (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether or not the class supports secure coding.

## Declaration

```swift
static var supportsSecureCoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When you write a class that supports secure coding, ensure that this class property’s getter returns [true](https://developer.apple.com/documentation/swift/true).

# supportsSecureCoding (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether or not the class supports secure coding.

## Declaration

```objectivec
@property (class, readonly) BOOL supportsSecureCoding;
```

<a id="Discussion"></a>

## Discussion

When you write a class that supports secure coding, ensure that this class property’s getter returns [true](https://developer.apple.com/documentation/swift/true).

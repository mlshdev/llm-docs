> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/openurloptions/openinplace](https://developer.apple.com/documentation/uikit/uiscene/openurloptions/openinplace)

# openInPlace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether you should open the URL at its current location instead of copying it to your app’s container.

## Declaration

```swift
var openInPlace: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), copy the document to your app’s container before opening the file. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), open the existing URL in its current location.

# openInPlace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether you should open the URL at its current location instead of copying it to your app’s container.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL openInPlace;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), copy the document to your app’s container before opening the file. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), open the existing URL in its current location.

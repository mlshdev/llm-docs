> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/mkannotationcalloutinfodidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/mkannotationcalloutinfodidchange)

# MKAnnotationCalloutInfoDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

A property to observe to determine when the title or subtitle information of an annotation object changes.

> Use KVO notifications instead.

## Declaration

```swift
static let MKAnnotationCalloutInfoDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification supports legacy applications and is no longer necessary. MapKit tracks changes to the title and subtitle of an annotation using KVO notifications.

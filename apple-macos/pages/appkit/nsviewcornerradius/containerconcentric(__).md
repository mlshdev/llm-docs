> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerradius/containerconcentric(_:)](https://developer.apple.com/documentation/appkit/nsviewcornerradius/containerconcentric(_:))

# containerConcentric(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A dynamic corner radius calculated based on the view’s container shape and limited to the provided minimum radius.

## Declaration

```swift
class func containerConcentric(_ minimumRadius: CGFloat) -> NSViewCornerRadius
```

## Parameters

- `minimumRadius`: Corner radius that’s applied when a corner of the view’s container is smaller than the specified radius.

# containerConcentricRadiusWithMinimum: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A dynamic corner radius calculated based on the view’s container shape and limited to the provided minimum radius.

## Declaration

```objectivec
+ (NSViewCornerRadius *) containerConcentricRadiusWithMinimum:(CGFloat) minimumRadius;
```

## Parameters

- `minimumRadius`: Corner radius that’s applied when a corner of the view’s container is smaller than the specified radius.

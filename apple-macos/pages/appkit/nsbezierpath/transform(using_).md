> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/transform(using:)](https://developer.apple.com/documentation/appkit/nsbezierpath/transform(using:))

# transform(using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Transforms all points in the path using the specified transform.

## Declaration

```swift
func transform(using transform: AffineTransform)
```

## Parameters

- `transform`: The transform to apply to the path.

<a id="Discussion"></a>

## Discussion

This method applies the transform to the path’s points immediately. The following code translates a line from 0,0 to 100,100 to a line from 10,10 to 110,110.

```objc
NSBezierPath *bezierPath = [NSBezierPath bezierPath];
NSAffineTransform *transform = [NSAffineTransform transform];
 
[bezierPath moveToPoint: NSMakePoint(0.0, 0.0)];
[bezierPath lineToPoint: NSMakePoint(100.0, 100.0)];
 
[transform translateXBy: 10.0 yBy: 10.0];
[bezierPath transformUsingAffineTransform: transform];
```

# transformUsingAffineTransform: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Transforms all points in the path using the specified transform.

## Declaration

```objectivec
- (void) transformUsingAffineTransform:(NSAffineTransform *) transform;
```

## Parameters

- `transform`: The transform to apply to the path.

<a id="Discussion"></a>

## Discussion

This method applies the transform to the path’s points immediately. The following code translates a line from 0,0 to 100,100 to a line from 10,10 to 110,110.

```objc
NSBezierPath *bezierPath = [NSBezierPath bezierPath];
NSAffineTransform *transform = [NSAffineTransform transform];
 
[bezierPath moveToPoint: NSMakePoint(0.0, 0.0)];
[bezierPath lineToPoint: NSMakePoint(100.0, 100.0)];
 
[transform translateXBy: 10.0 yBy: 10.0];
[bezierPath transformUsingAffineTransform: transform];
```

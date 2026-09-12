> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/update/drawable](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/update/drawable)

# drawable (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The Metal drawable your app uses to render the next frame.

## Declaration

```swift
var drawable: any CAMetalDrawable { get }
```

## See Also

### Drawing the Next Frame

- [targetTimestamp](targettimestamp.md): A deadline that indicates when your app needs to finish rendering to the drawable.

# drawable (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The Metal drawable your app uses to render the next frame.

## Declaration

```objectivec
@property (nonatomic, readonly) id<CAMetalDrawable> drawable;
```

## See Also

### Drawing the Next Frame

- [targetTimestamp](targettimestamp.md): A deadline that indicates when your app needs to finish rendering to the drawable.

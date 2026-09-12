> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/showsactivityindicator](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/showsactivityindicator)

# showsActivityIndicator

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the button displays an activity indicator instead of an image.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL showsActivityIndicator;
```

<a id="Discussion"></a>

## Discussion

The button respects the [imagePlacement](imageplacement.md) property when positioning the activity indicator.

## See Also

### Configuring the activity indicator

- [activityIndicatorColorTransformer](activityindicatorcolortransformer.md): The color transformer for resolving the color of the activity indicator.

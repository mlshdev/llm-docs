> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsviewgesturerecognizerisexclusive](https://developer.apple.com/documentation/bundleresources/information-property-list/nsviewgesturerecognizerisexclusive)

# NSViewGestureRecognizerIsExclusive

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 27.0+

A Boolean value that controls whether only one view’s gesture recognizers can be active at a time.

## Details

`NSViewGestureRecognizerIsExclusive`

<a id="Discussion"></a>

## Discussion

Set this key to `NO` to allow gesture recognizers in multiple views to activate simultaneously. Do this only if your app intentionally needs concurrent gesture recognition across different views.

By default, AppKit allows only one view to process a gesture at a time. Once a gesture recognizer in one view becomes active, touches in other views won’t activate their gesture recognizers until the first gesture completes. This prevents multiple simultaneous gestures from conflicting with each other.

For finer-grained control, use the [exclusiveGestureBehavior](https://developer.apple.com/documentation/appkit/nsview/exclusivegesturebehavior-swift.property) property instead of this key to configure exclusivity on individual views and their subviews, rather than applying a single setting to the entire app.

The default value is `YES`.

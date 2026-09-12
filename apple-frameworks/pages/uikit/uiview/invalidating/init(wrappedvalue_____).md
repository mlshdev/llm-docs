> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidating/init(wrappedvalue:_:_:)](https://developer.apple.com/documentation/uikit/uiview/invalidating/init(wrappedvalue:_:_:))

# init(wrappedValue:\_:\_:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.

## Declaration

```swift
init<InvalidationType1, InvalidationType2>(wrappedValue: Value, _ invalidation1: InvalidationType1, _ invalidation2: InvalidationType2) where InvalidationType == UIView.Invalidations.Tuple<InvalidationType1, InvalidationType2>, InvalidationType1 : UIViewInvalidating, InvalidationType2 : UIViewInvalidating
```

## Parameters

- `wrappedValue`: The underlying value referenced by the invalidating variable.
- `invalidation1`: A type of invalidation.
- `invalidation2`: A type of invalidation.

## See Also

### Creating an Invalidating Property Wrapper

- [init(wrappedValue:\_:)](init%28wrappedvalue___%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates an aspect of the containing view.
- [init(wrappedValue:\_:\_:\_:)](init%28wrappedvalue_______%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:)](init%28wrappedvalue_________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:)](init%28wrappedvalue___________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_____________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_______________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue___________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_____________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.

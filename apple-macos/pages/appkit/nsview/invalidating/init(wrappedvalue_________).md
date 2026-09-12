> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidating/init(wrappedvalue:_:_:_:_:)](https://developer.apple.com/documentation/appkit/nsview/invalidating/init(wrappedvalue:_:_:_:_:))

# init(wrappedValue:\_:\_:\_:\_:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+ · Swift 5.1+

Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.

## Declaration

```swift
init<InvalidationType1, InvalidationType2, InvalidationType3, InvalidationType4>(wrappedValue: Value, _ invalidation1: InvalidationType1, _ invalidation2: InvalidationType2, _ invalidation3: InvalidationType3, _ invalidation4: InvalidationType4) where InvalidationType == NSView.Invalidations.Tuple<NSView.Invalidations.Tuple<InvalidationType1, InvalidationType2>, NSView.Invalidations.Tuple<InvalidationType3, InvalidationType4>>, InvalidationType1 : NSViewInvalidating, InvalidationType2 : NSViewInvalidating, InvalidationType3 : NSViewInvalidating, InvalidationType4 : NSViewInvalidating
```

## Parameters

- `wrappedValue`: The underlying value referenced by the invalidating variable.
- `invalidation1`: A type of invalidation.
- `invalidation2`: A type of invalidation.
- `invalidation3`: A type of invalidation.
- `invalidation4`: A type of invalidation.

## See Also

### Creating an Invalidating Property Wrapper

- [init(wrappedValue:\_:)](init%28wrappedvalue___%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates an aspect of the containing view.
- [init(wrappedValue:\_:\_:)](init%28wrappedvalue_____%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:)](init%28wrappedvalue_______%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:)](init%28wrappedvalue___________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_____________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_______________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue___________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.
- [init(wrappedValue:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](init%28wrappedvalue_____________________%29.md): Creates a property wrapper that notifies the system when a change in the property value invalidates aspects of the containing view.

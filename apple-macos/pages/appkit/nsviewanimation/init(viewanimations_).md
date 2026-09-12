> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewanimation/init(viewanimations:)](https://developer.apple.com/documentation/appkit/nsviewanimation/init(viewanimations:))

# init(viewAnimations:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSViewAnimation` object initialized with the supplied information.

## Declaration

```swift
init(viewAnimations: [[NSViewAnimation.Key : Any]])
```

## Parameters

- `viewAnimations`: An array of [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) objects. Each dictionary specifies a view or window to animate and the effect to apply. `viewAnimations` can be `nil`, but you must later set the required array of dictionaries with [viewAnimations](viewanimations.md) if you want to use the capabilities of the `NSViewAnimation` class. See`View Animation Dictionary Keys` for a description of valid keys and values for dictionaries in `viewAnimations`.

<a id="return-value"></a>

## Return Value

The created `NSViewAnimation` object or `nil` if there was a problem initializing the object.

# initWithViewAnimations: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSViewAnimation` object initialized with the supplied information.

## Declaration

```objectivec
- (instancetype) initWithViewAnimations:(NSArray<NSDictionary<NSString *,id> *> *) viewAnimations;
```

## Parameters

- `viewAnimations`: An array of [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) objects. Each dictionary specifies a view or window to animate and the effect to apply. `viewAnimations` can be `nil`, but you must later set the required array of dictionaries with [viewAnimations](viewanimations.md) if you want to use the capabilities of the `NSViewAnimation` class. See`View Animation Dictionary Keys` for a description of valid keys and values for dictionaries in `viewAnimations`.

<a id="return-value"></a>

## Return Value

The created `NSViewAnimation` object or `nil` if there was a problem initializing the object.

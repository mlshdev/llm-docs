> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/requiresconstraintbasedlayout](https://developer.apple.com/documentation/appkit/nsview/requiresconstraintbasedlayout)

# requiresConstraintBasedLayout (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns a Boolean value indicating whether the view depends on the constraint-based layout system.

## Declaration

```swift
class var requiresConstraintBasedLayout: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view must be in a window using constraint-based layout to function properly, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Custom views should override this to return [true](https://developer.apple.com/documentation/swift/true) if they can not layout correctly using autoresizing.

## See Also

### Opting In to Auto Layout

- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

# requiresConstraintBasedLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns a Boolean value indicating whether the view depends on the constraint-based layout system.

## Declaration

```objectivec
@property (class, readonly) BOOL requiresConstraintBasedLayout;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view must be in a window using constraint-based layout to function properly, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Custom views should override this to return [true](https://developer.apple.com/documentation/swift/true) if they can not layout correctly using autoresizing.

## See Also

### Opting In to Auto Layout

- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

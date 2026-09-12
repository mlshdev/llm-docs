> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/nibname](https://developer.apple.com/documentation/appkit/nsviewcontroller/nibname)

# nibName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The name of the nib file to be loaded to instantiate the receiver’s primary view.

## Declaration

```swift
var nibName: NSNib.Name? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is the name you provide to the `nibNameOrNil` parameter in the [init(nibName:bundle:)](init%28nibname_bundle_%29.md) method.

## See Also

### Related Documentation

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Returns a view controller object initialized to the nib file in the specified bundle.

### Nib Properties

- [nibBundle](nibbundle.md): The nib bundle to be loaded to instantiate the receiver’s primary view.

# nibName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The name of the nib file to be loaded to instantiate the receiver’s primary view.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSNibName nibName;
```

<a id="Discussion"></a>

## Discussion

This property’s value is the name you provide to the `nibNameOrNil` parameter in the [initWithNibName:bundle:](init%28nibname_bundle_%29.md) method.

## See Also

### Related Documentation

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Returns a view controller object initialized to the nib file in the specified bundle.

### Nib Properties

- [nibBundle](nibbundle.md): The nib bundle to be loaded to instantiate the receiver’s primary view.

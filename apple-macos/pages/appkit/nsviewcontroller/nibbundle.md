> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/nibbundle](https://developer.apple.com/documentation/appkit/nsviewcontroller/nibbundle)

# nibBundle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The nib bundle to be loaded to instantiate the receiver’s primary view.

## Declaration

```swift
var nibBundle: Bundle? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is the bundle you provide to the `nibBundleOrNil` parameter in the [init(nibName:bundle:)](init%28nibname_bundle_%29.md) method.

## See Also

### Nib Properties

- [nibName](nibname.md): The name of the nib file to be loaded to instantiate the receiver’s primary view.

# nibBundle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The nib bundle to be loaded to instantiate the receiver’s primary view.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSBundle * nibBundle;
```

<a id="Discussion"></a>

## Discussion

This property’s value is the bundle you provide to the `nibBundleOrNil` parameter in the [initWithNibName:bundle:](init%28nibname_bundle_%29.md) method.

## See Also

### Nib Properties

- [nibName](nibname.md): The name of the nib file to be loaded to instantiate the receiver’s primary view.

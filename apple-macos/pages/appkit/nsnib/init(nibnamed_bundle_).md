> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/init(nibnamed:bundle:)](https://developer.apple.com/documentation/appkit/nsnib/init(nibnamed:bundle:))

# init(nibNamed:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSNib` object initialized to the nib file in the specified bundle.

## Declaration

```swift
init?(nibNamed nibName: NSNib.Name, bundle: Bundle?)
```

## Parameters

- `nibName`: The name of the nib file, without any leading path information. Inclusion of the `.nib` extension on the nib file name is optional.
- `bundle`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized `NSNib` object or `nil` if there were errors during initialization or the nib file could not be located.

<a id="Discussion"></a>

## Discussion

The `NSNib` object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

After the nib file has been loaded, the `NSNib` object uses the bundle’s resource map to locate additional resources referenced by the nib. If you specified `nil` for the `bundle` parameter, the `NSNib` object looks for those resources in the bundle associated with the class of the nib file’s owner instead. If the nib file does not have an owner, the `NSNib` object looks for additional resources in the application’s main bundle.

## See Also

### Initializing a Nib

- [init(nibData:bundle:)](init%28nibdata_bundle_%29.md): Initializes an instance with nib data and specified bundle for locating resources.
- [NSNib.Name](name.md)

# initWithNibNamed:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSNib` object initialized to the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibNamed:(NSNibName) nibName bundle:(NSBundle *) bundle;
```

## Parameters

- `nibName`: The name of the nib file, without any leading path information. Inclusion of the `.nib` extension on the nib file name is optional.
- `bundle`: The bundle in which to search for the nib file. If you specify `nil`, this method looks for the nib file in the main bundle.

<a id="return-value"></a>

## Return Value

The initialized `NSNib` object or `nil` if there were errors during initialization or the nib file could not be located.

<a id="Discussion"></a>

## Discussion

The `NSNib` object looks for the nib file in the bundle’s language-specific project directories first, followed by the `Resources` directory.

After the nib file has been loaded, the `NSNib` object uses the bundle’s resource map to locate additional resources referenced by the nib. If you specified `nil` for the `bundle` parameter, the `NSNib` object looks for those resources in the bundle associated with the class of the nib file’s owner instead. If the nib file does not have an owner, the `NSNib` object looks for additional resources in the application’s main bundle.

## See Also

### Initializing a Nib

- [initWithContentsOfURL:](initwithcontentsofurl_.md): Deprecated. Returns an `NSNib` object initialized to the nib file at the specified URL.
- [initWithNibData:bundle:](init%28nibdata_bundle_%29.md): Initializes an instance with nib data and specified bundle for locating resources.
- [NSNibName](name.md)

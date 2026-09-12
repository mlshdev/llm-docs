> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/init(nibdata:bundle:)](https://developer.apple.com/documentation/appkit/nsnib/init(nibdata:bundle:))

# init(nibData:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes an instance with nib data and specified bundle for locating resources.

## Declaration

```swift
init(nibData: Data, bundle: Bundle?)
```

## Parameters

- `nibData`: The nib data.
- `bundle`: The bundle for locating resources. If `nil`, the main application bundle is used.

<a id="return-value"></a>

## Return Value

The initialized `NSNib` object or `nil` if there were errors during initialization.

## See Also

### Initializing a Nib

- [init(nibNamed:bundle:)](init%28nibnamed_bundle_%29.md): Returns an `NSNib` object initialized to the nib file in the specified bundle.
- [NSNib.Name](name.md)

# initWithNibData:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes an instance with nib data and specified bundle for locating resources.

## Declaration

```objectivec
- (instancetype) initWithNibData:(NSData *) nibData bundle:(NSBundle *) bundle;
```

## Parameters

- `nibData`: The nib data.
- `bundle`: The bundle for locating resources. If `nil`, the main application bundle is used.

<a id="return-value"></a>

## Return Value

The initialized `NSNib` object or `nil` if there were errors during initialization.

## See Also

### Initializing a Nib

- [initWithContentsOfURL:](initwithcontentsofurl_.md): Deprecated. Returns an `NSNib` object initialized to the nib file at the specified URL.
- [initWithNibNamed:bundle:](init%28nibnamed_bundle_%29.md): Returns an `NSNib` object initialized to the nib file in the specified bundle.
- [NSNibName](name.md)

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/initwithcontentsofurl:](https://developer.apple.com/documentation/appkit/nsnib/initwithcontentsofurl:)

# initWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns an `NSNib` object initialized to the nib file at the specified URL.

> Use [initWithNibData:bundle:](init%28nibdata_bundle_%29.md) and specify a bundle for locating images and other resources.

## Declaration

```objectivec
- (id) initWithContentsOfURL:(NSURL *) nibFileURL;
```

## Parameters

- `nibFileURL`: The location of the nib file.

<a id="return-value"></a>

## Return Value

The initialized `NSNib` object or `nil` if there were errors during initialization or the nib file could not be located.

<a id="Discussion"></a>

## Discussion

When you instantiate the nib objects later, the `NSNib` object looks for an appropriate bundle from which to search for any additional resources referenced by the nib. Because you do not specify a bundle directory when calling this method, the receiver uses the bundle associated with the class of the nib file’s owner. If the nib file does not have an owner, the receiver uses the application’s main bundle instead.

## See Also

### Related Documentation

- [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i)

### Initializing a Nib

- [initWithNibNamed:bundle:](init%28nibnamed_bundle_%29.md): Returns an `NSNib` object initialized to the nib file in the specified bundle.
- [initWithNibData:bundle:](init%28nibdata_bundle_%29.md): Initializes an instance with nib data and specified bundle for locating resources.
- [NSNibName](name.md)

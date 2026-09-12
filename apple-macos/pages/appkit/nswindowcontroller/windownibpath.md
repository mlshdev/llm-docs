> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windownibpath](https://developer.apple.com/documentation/appkit/nswindowcontroller/windownibpath)

# windowNibPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The full path of the nib file that stores the window associated with the receiver.

## Declaration

```swift
var windowNibPath: String? { get }
```

<a id="Discussion"></a>

## Discussion

If [init(windowNibPath:owner:)](init%28windownibpath_owner_%29.md) was used to initialize the instance, this property contains the path. If [init(windowNibName:)](init%28windownibname_%29.md) or [init(windowNibName:owner:)](init%28windownibname_owner_%29.md) was used, [windowNibPath](windownibpath.md) locates the nib in the file’s owner’s class’ bundle or in the application’s main bundle and returns the full path (or `nil` if it cannot be located). Subclasses can override this behavior to augment the search behavior, but probably ought to call `super` first.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.

# windowNibPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The full path of the nib file that stores the window associated with the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * windowNibPath;
```

<a id="Discussion"></a>

## Discussion

If [initWithWindowNibPath:owner:](init%28windownibpath_owner_%29.md) was used to initialize the instance, this property contains the path. If [initWithWindowNibName:](init%28windownibname_%29.md) or [initWithWindowNibName:owner:](init%28windownibname_owner_%29.md) was used, [windowNibPath](windownibpath.md) locates the nib in the file’s owner’s class’ bundle or in the application’s main bundle and returns the full path (or `nil` if it cannot be located). Subclasses can override this behavior to augment the search behavior, but probably ought to call `super` first.

## See Also

### Getting Nib and Storyboard Information

- [owner](owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](windownibname.md): The name of the nib file that stores the window associated with the receiver.

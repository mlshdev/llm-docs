> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/loadnibnamed(_:owner:options:)](https://developer.apple.com/documentation/foundation/bundle/loadnibnamed(_:owner:options:))

# loadNibNamed(\_:owner:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Unarchives the contents of a nib file located in the receiver’s bundle.

## Declaration

```swift
func loadNibNamed(_ name: String, owner: Any?, options: [UINib.OptionsKey : Any]? = nil) -> [Any]?
```

## Parameters

- `name`: The name of the nib file, which need not include the `.nib` extension.
- `owner`: The object to assign as the nib’s File’s Owner object.
- `options`: A dictionary containing the options to use when opening the nib file. For a list of available keys for this dictionary, see `UIKit Nib Loading Options`.

<a id="return-value"></a>

## Return Value

An array containing the top-level objects in the nib file. The array does not contain references to the File’s Owner or any proxy objects; it contains only those objects that were instantiated when the nib file was unarchived. You should retain either the returned array or the objects it contains manually to prevent the nib file objects from being released prematurely.

<a id="Discussion"></a>

## Discussion

You can use this method to load user interfaces and make the objects available to your code. During the loading process, this method unarchives each object, initializes it, sets its properties to their configured values, and reestablishes any connections to other objects. (To establish outlet connections, this method uses the `setValue:forKey:` method, which may cause the object in the outlet to be retained automatically.) For detailed information about the nib-loading process, see [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

If the nib file contains any proxy objects beyond just the File’s Owner proxy object, you can specify the runtime replacement objects for those proxies using the options dictionary. In that dictionary, add the `UINibExternalObjects` key and set its value to a dictionary containing the names of any proxy objects (the keys) and the real objects to use in their place. The proxy object’s name is the string you assign to it in the Identifier field of the Interface Builder inspector window.

## See Also

### Loading nib files

- [loadNibNamed(\_:owner:topLevelObjects:)](loadnibnamed%28__owner_toplevelobjects_%29.md): Loads a nib from the bundle with the specified file name and owner.

# loadNibNamed:owner:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0)

Unarchives the contents of a nib file located in the receiver’s bundle.

## Declaration

```objectivec
- (NSArray *) loadNibNamed:(NSString *) name owner:(id) owner options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `name`: The name of the nib file, which need not include the `.nib` extension.
- `owner`: The object to assign as the nib’s File’s Owner object.
- `options`: A dictionary containing the options to use when opening the nib file. For a list of available keys for this dictionary, see `UIKit Nib Loading Options`.

<a id="return-value"></a>

## Return Value

An array containing the top-level objects in the nib file. The array does not contain references to the File’s Owner or any proxy objects; it contains only those objects that were instantiated when the nib file was unarchived. You should retain either the returned array or the objects it contains manually to prevent the nib file objects from being released prematurely.

<a id="Discussion"></a>

## Discussion

You can use this method to load user interfaces and make the objects available to your code. During the loading process, this method unarchives each object, initializes it, sets its properties to their configured values, and reestablishes any connections to other objects. (To establish outlet connections, this method uses the `setValue:forKey:` method, which may cause the object in the outlet to be retained automatically.) For detailed information about the nib-loading process, see [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

If the nib file contains any proxy objects beyond just the File’s Owner proxy object, you can specify the runtime replacement objects for those proxies using the options dictionary. In that dictionary, add the `UINibExternalObjects` key and set its value to a dictionary containing the names of any proxy objects (the keys) and the real objects to use in their place. The proxy object’s name is the string you assign to it in the Identifier field of the Interface Builder inspector window.

## See Also

### Loading nib files

- [loadNibNamed:owner:topLevelObjects:](loadnibnamed%28__owner_toplevelobjects_%29.md): Loads a nib from the bundle with the specified file name and owner.
- [loadNibNamed:owner:](../nsbundle/loadnibnamed_owner_.md): Deprecated. Unarchives the contents of the nib file and links them to a specific owner object.
- [loadNibFile:externalNameTable:withZone:](../nsbundle/loadnibfile_externalnametable_withzone_-c.type.method.md): Deprecated. Unarchives the contents of the nib file and links them to objects in your program.
- [loadNibFile:externalNameTable:withZone:](../nsbundle/loadnibfile_externalnametable_withzone_-c.method.md): Deprecated. Unarchives the contents of a nib file located in the receiver’s bundle.

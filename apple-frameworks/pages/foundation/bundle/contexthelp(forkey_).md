> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/contexthelp(forkey:)](https://developer.apple.com/documentation/foundation/bundle/contexthelp(forkey:))

# contextHelp(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the context-sensitive help for the specified key from the bundle’s help file.

## Declaration

```swift
func contextHelp(forKey key: NSHelpManager.ContextHelpKey) -> NSAttributedString?
```

## Parameters

- `key`: A key in your application’s `Help.plist` file that identifies the context-sensitive help to return.

<a id="return-value"></a>

## Return Value

The help string or `nil` if the application does not have a `Help.plist` file or the file does not contain an entry for the specified `key`.

<a id="Discussion"></a>

## Discussion

When you build your application, you can merge multiple RTF-based help files together using the `/usr/bin/compileHelp` tool, which then packages your help file information into a property list named `Help.plist`. After placing this property-list file in your application bundle, you can use this method to extract context help information from it. To look up a particular entry, you specify the name of the original RTF help file in the `key` parameter of this method. For example, if your application project contains a help file named `Copy.rtf`, you would retrieve the text from this file by passing the value `@"Copy.rtf"` to the `key` parameter.

This method is declared in `NSHelpManager.h`.

## See Also

### Related Documentation

- [contextHelp(for:)](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelp%28for:%29): Returns context-sensitive help for an object.

# contextHelpForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the context-sensitive help for the specified key from the bundle’s help file.

## Declaration

```objectivec
- (NSAttributedString *) contextHelpForKey:(NSHelpManagerContextHelpKey) key;
```

## Parameters

- `key`: A key in your application’s `Help.plist` file that identifies the context-sensitive help to return.

<a id="return-value"></a>

## Return Value

The help string or `nil` if the application does not have a `Help.plist` file or the file does not contain an entry for the specified `key`.

<a id="Discussion"></a>

## Discussion

When you build your application, you can merge multiple RTF-based help files together using the `/usr/bin/compileHelp` tool, which then packages your help file information into a property list named `Help.plist`. After placing this property-list file in your application bundle, you can use this method to extract context help information from it. To look up a particular entry, you specify the name of the original RTF help file in the `key` parameter of this method. For example, if your application project contains a help file named `Copy.rtf`, you would retrieve the text from this file by passing the value `@"Copy.rtf"` to the `key` parameter.

This method is declared in `NSHelpManager.h`.

## See Also

### Related Documentation

- [contextHelpForObject:](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelp%28for:%29): Returns context-sensitive help for an object.

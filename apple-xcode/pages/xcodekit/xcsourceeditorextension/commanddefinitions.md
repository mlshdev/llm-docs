> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorextension/commanddefinitions](https://developer.apple.com/documentation/xcodekit/xcsourceeditorextension/commanddefinitions)

# commandDefinitions (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The array of command definitions used by Xcode to associate command names with their implementation in an extension.

## Declaration

```swift
optional var commandDefinitions: [[XCSourceEditorCommandDefinitionKey : Any]] { get }
```

<a id="Discussion"></a>

## Discussion

Implement this property when you need to override the command definitions specified in your extension target’s Info.plist file. There are no guarantees about the thread or queue on which this property is accessed.

## See Also

### Related Documentation

- [XCSourceEditorCommandDefinitionKey](../xcsourceeditorcommanddefinitionkey.md): A key in the dictionary that defines a source editor command.

# commandDefinitions (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The array of command definitions used by Xcode to associate command names with their implementation in an extension.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSDictionary<NSString *,id> *> * commandDefinitions;
```

<a id="Discussion"></a>

## Discussion

Implement this property when you need to override the command definitions specified in your extension target’s Info.plist file. There are no guarantees about the thread or queue on which this property is accessed.

## See Also

### Related Documentation

- [XCSourceEditorCommandDefinitionKey](../xcsourceeditorcommanddefinitionkey.md): A key in the dictionary that defines a source editor command.

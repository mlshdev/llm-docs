> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/suitename

# suiteName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the suite that contains the command described by the receiver.

## Declaration

```swift
var suiteName: String { get }
```

<a id="return-value"></a>

## Return Value

The receiver’s suite name. Within an application’s scriptability information, named suites contain related sets of information.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.

# suiteName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the suite that contains the command described by the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSString * suiteName;
```

<a id="return-value"></a>

## Return Value

The receiver’s suite name. Within an application’s scriptability information, named suites contain related sets of information.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.

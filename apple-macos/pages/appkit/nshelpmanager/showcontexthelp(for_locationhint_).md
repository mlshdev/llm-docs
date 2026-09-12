> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/showcontexthelp(for:locationhint:)](https://developer.apple.com/documentation/appkit/nshelpmanager/showcontexthelp(for:locationhint:))

# showContextHelp(for:locationHint:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.

## Declaration

```swift
func showContextHelp(for object: Any, locationHint pt: NSPoint) -> Bool
```

## Parameters

- `object`: Object for which context-sensitive help is sought.
- `pt`: Screen location at which to display the help content; it’s usually under the cursor.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when help content is successfully displayed. [false](https://developer.apple.com/documentation/swift/false) if help content is not displayed (for example, when there is no context-sensitive help associated with `object`).

## See Also

### Displaying Context-Sensitive Help

- [contextHelp(for:)](contexthelp%28for_%29.md): Returns context-sensitive help for an object.
- [NSHelpManager.ContextHelpKey](contexthelpkey.md)
- [isContextHelpModeActive](iscontexthelpmodeactive.md)

# showContextHelpForObject:locationHint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.

## Declaration

```objectivec
- (BOOL) showContextHelpForObject:(id) object locationHint:(NSPoint) pt;
```

## Parameters

- `object`: Object for which context-sensitive help is sought.
- `pt`: Screen location at which to display the help content; it’s usually under the cursor.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when help content is successfully displayed. [false](https://developer.apple.com/documentation/swift/false) if help content is not displayed (for example, when there is no context-sensitive help associated with `object`).

## See Also

### Displaying Context-Sensitive Help

- [contextHelpForObject:](contexthelp%28for_%29.md): Returns context-sensitive help for an object.
- [NSHelpManagerContextHelpKey](contexthelpkey.md)
- [contextHelpModeActive](iscontexthelpmodeactive.md)

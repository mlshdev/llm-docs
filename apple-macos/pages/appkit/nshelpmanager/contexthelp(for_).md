> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/contexthelp(for:)](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelp(for:))

# contextHelp(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns context-sensitive help for an object.

## Declaration

```swift
func contextHelp(for object: Any) -> NSAttributedString?
```

## Parameters

- `object`: Object for which context-sensitive help is sought.

<a id="return-value"></a>

## Return Value

Context-sensitive help content.

## See Also

### Related Documentation

- [setContextHelp(\_:for:)](setcontexthelp%28__for_%29.md): Associates help content with an object.

### Displaying Context-Sensitive Help

- [showContextHelp(for:locationHint:)](showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.
- [NSHelpManager.ContextHelpKey](contexthelpkey.md)
- [isContextHelpModeActive](iscontexthelpmodeactive.md)

# contextHelpForObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns context-sensitive help for an object.

## Declaration

```objectivec
- (NSAttributedString *) contextHelpForObject:(id) object;
```

## Parameters

- `object`: Object for which context-sensitive help is sought.

<a id="return-value"></a>

## Return Value

Context-sensitive help content.

## See Also

### Related Documentation

- [setContextHelp:forObject:](setcontexthelp%28__for_%29.md): Associates help content with an object.

### Displaying Context-Sensitive Help

- [showContextHelpForObject:locationHint:](showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.
- [NSHelpManagerContextHelpKey](contexthelpkey.md)
- [contextHelpModeActive](iscontexthelpmodeactive.md)

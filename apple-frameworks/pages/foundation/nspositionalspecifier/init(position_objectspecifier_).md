> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier/init(position:objectspecifier:)](https://developer.apple.com/documentation/foundation/nspositionalspecifier/init(position:objectspecifier:))

# init(position:objectSpecifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a positional specifier with a given position relative to another given specifier.

## Declaration

```swift
init(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier specifier: NSScriptObjectSpecifier)
```

## Parameters

- `position`: The position for the new specifier relative to `specifier`.
- `specifier`: The reference specifier.

<a id="return-value"></a>

## Return Value

An initialized positional specifier with the position specified by `position` relative to the object specified by `specifier`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithPosition:objectSpecifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a positional specifier with a given position relative to another given specifier.

## Declaration

```objectivec
- (instancetype) initWithPosition:(NSInsertionPosition) position objectSpecifier:(NSScriptObjectSpecifier *) specifier;
```

## Parameters

- `position`: The position for the new specifier relative to `specifier`.
- `specifier`: The reference specifier.

<a id="return-value"></a>

## Return Value

An initialized positional specifier with the position specified by `position` relative to the object specified by `specifier`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

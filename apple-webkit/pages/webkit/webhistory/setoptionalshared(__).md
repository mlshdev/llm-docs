> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/setoptionalshared(_:)](https://developer.apple.com/documentation/webkit/webhistory/setoptionalshared(_:))

# setOptionalShared(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the web history object to share.

## Declaration

```swift
class func setOptionalShared(_ history: WebHistory!)
```

## Parameters

- `history`: The web history object to share.

## See Also

### Related Documentation

- [load(from:)](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.

### Accessing Shared History Objects

- [optionalShared()](optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.

# setOptionalSharedHistory: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the web history object to share.

## Declaration

```objectivec
+ (void) setOptionalSharedHistory:(WebHistory *) history;
```

## Parameters

- `history`: The web history object to share.

## See Also

### Related Documentation

- [loadFromURL:error:](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.

### Accessing Shared History Objects

- [optionalSharedHistory](optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.

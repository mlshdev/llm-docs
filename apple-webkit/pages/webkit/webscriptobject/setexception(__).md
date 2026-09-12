> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/setexception(_:)](https://developer.apple.com/documentation/webkit/webscriptobject/setexception(_:))

# setException(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Raises a scripting environment exception in the context of the current object.

## Declaration

```swift
func setException(_ description: String!)
```

## Parameters

- `description`: Description of the exception.

## See Also

### Raising exceptions

- [throwException(\_:)](throwexception%28__%29.md): Deprecated. Raises an exception in the current script execution context.

# setException: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Raises a scripting environment exception in the context of the current object.

## Declaration

```objectivec
- (void) setException:(NSString *) description;
```

## Parameters

- `description`: Description of the exception.

## See Also

### Raising exceptions

- [throwException:](throwexception%28__%29.md): Deprecated. Raises an exception in the current script execution context.

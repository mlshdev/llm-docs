> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/init(source:)](https://developer.apple.com/documentation/foundation/nsapplescript/init(source:))

# init(source:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated script instance from the passed source.

## Declaration

```swift
init?(source: String)
```

## Parameters

- `source`: A string containing the source code of a script.

<a id="return-value"></a>

## Return Value

The initialized script object, `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSAppleScript`.

## See Also

### Initializing a Script

- [init(contentsOf:error:)](init%28contentsof_error_%29.md): Initializes a newly allocated script instance from the source identified by the passed URL.

# initWithSource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated script instance from the passed source.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSString *) source;
```

## Parameters

- `source`: A string containing the source code of a script.

<a id="return-value"></a>

## Return Value

The initialized script object, `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSAppleScript`.

## See Also

### Initializing a Script

- [initWithContentsOfURL:error:](init%28contentsof_error_%29.md): Initializes a newly allocated script instance from the source identified by the passed URL.

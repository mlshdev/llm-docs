> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsapplescript/init(contentsof:error:)](https://developer.apple.com/documentation/foundation/nsapplescript/init(contentsof:error:))

# init(contentsOf:error:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated script instance from the source identified by the passed URL.

## Declaration

```swift
init?(contentsOf url: URL, error errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `url`: A URL that locates a script, in either text or compiled form.
- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The initialized script object, `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSAppleScript`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Initializing a Script

- [init(source:)](init%28source_%29.md): Initializes a newly allocated script instance from the passed source.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes a newly allocated script instance from the source identified by the passed URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url error:(NSDictionary<NSString *,id> **) errorInfo;
```

## Parameters

- `url`: A URL that locates a script, in either text or compiled form.
- `errorInfo`: On return, if an error occurs, a pointer to an error information dictionary.

<a id="return-value"></a>

## Return Value

The initialized script object, `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSAppleScript`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Initializing a Script

- [initWithSource:](init%28source_%29.md): Initializes a newly allocated script instance from the passed source.

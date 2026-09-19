> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsapplescript/source

# source (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The script source for the receiver.

## Declaration

```swift
var source: String? { get }
```

<a id="Discussion"></a>

## Discussion

It is possible for an `NSAppleScript` that has been instantiated with [init(contentsOf:error:)](init%28contentsof_error_%29.md) to be a script for which the source code is not available but is nonetheless executable.

## See Also

### Getting Information About a Script

- [isCompiled](iscompiled.md): A Boolean value that indicates whether the receiver’s script has been compiled.

# source (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The script source for the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * source;
```

<a id="Discussion"></a>

## Discussion

It is possible for an `NSAppleScript` that has been instantiated with [initWithContentsOfURL:error:](init%28contentsof_error_%29.md) to be a script for which the source code is not available but is nonetheless executable.

## See Also

### Getting Information About a Script

- [compiled](iscompiled.md): A Boolean value that indicates whether the receiver’s script has been compiled.

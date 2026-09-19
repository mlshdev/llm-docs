> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nscoder/version(forclassname:)

# version(forClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is present for historical reasons and is not used with keyed archivers.

## Declaration

```swift
func version(forClassName className: String) -> Int
```

<a id="return-value"></a>

## Return Value

The version in effect for the class named `className` or `NSNotFound` if no class named `className` exists.

<a id="Discussion"></a>

## Discussion

The version number does apply not to `NSKeyedArchiver`/`NSKeyedUnarchiver`.  A keyed archiver does not encode class version numbers.

## See Also

### Getting Version Information

- [systemVersion](systemversion.md): The system version in effect for the archive.

# versionForClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is present for historical reasons and is not used with keyed archivers.

## Declaration

```objectivec
- (NSInteger) versionForClassName:(NSString *) className;
```

<a id="return-value"></a>

## Return Value

The version in effect for the class named `className` or `NSNotFound` if no class named `className` exists.

<a id="Discussion"></a>

## Discussion

The version number does apply not to `NSKeyedArchiver`/`NSKeyedUnarchiver`.  A keyed archiver does not encode class version numbers.

## See Also

### Getting Version Information

- [systemVersion](systemversion.md): The system version in effect for the archive.

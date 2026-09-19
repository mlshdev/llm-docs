> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsarray/write(to:atomically:)

# write(to:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Writes the contents of the array to the location specified by a given URL.

## Declaration

```swift
func write(to url: URL, atomically: Bool) -> Bool
```

## Parameters

- `url`: The location at which to write the array.
- `atomically`: If [true](https://developer.apple.com/documentation/swift/true), the array is written to an auxiliary location, and then the auxiliary location is renamed to `aURL`. If [false](https://developer.apple.com/documentation/swift/false), the array is written directly to `aURL`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `aURL`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the array’s contents are all property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects), the location written by this method can be used to initialize a new array with the class method `NSArray/init(contentsOfURL:)-fk8x` or the instance method `NSArray/init(contentsOfURL:)-5lo2y`.

## See Also

### Storing Arrays

- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.

# writeToURL:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Writes the contents of the array to the location specified by a given URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url atomically:(BOOL) atomically;
```

## Parameters

- `url`: The location at which to write the array.
- `atomically`: If [true](https://developer.apple.com/documentation/swift/true), the array is written to an auxiliary location, and then the auxiliary location is renamed to `aURL`. If [false](https://developer.apple.com/documentation/swift/false), the array is written directly to `aURL`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `aURL`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the array’s contents are all property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects), the location written by this method can be used to initialize a new array with the class method `NSArray/init(contentsOfURL:)-fk8x` or the instance method `NSArray/init(contentsOfURL:)-5lo2y`.

## See Also

### Storing Arrays

- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.

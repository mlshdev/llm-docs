> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nspointerfunctions/pointerfunctionswithoptions:

# pointerFunctionsWithOptions:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new `NSPointerFunctions` object initialized with the given options.

## Declaration

```objectivec
+ (NSPointerFunctions *) pointerFunctionsWithOptions:(NSPointerFunctionsOptions) options;
```

## Parameters

- `options`: The options for the new `NSPointerFunctions` object.

<a id="return-value"></a>

## Return Value

A new `NSPointerFunctions` object initialized with the given options.

## See Also

### Creating and Initializing an NSPointerFunctions Object

- [initWithOptions:](init%28options_%29.md): Returns an `NSPointerFunctions` object initialized with the given options.

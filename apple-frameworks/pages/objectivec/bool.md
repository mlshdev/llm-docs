> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/bool

# BOOL

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type to represent a Boolean value.

## Declaration

```objectivec
typedef bool BOOL;
```

<a id="Discussion"></a>

## Discussion

`BOOL` is explicitly signed so `@encode(BOOL)` is `c` rather than `C` even if `-funsigned-char` is used.

For values, see [Boolean Values](boolean-values.md).

<a id="Special-Considerations"></a>

### Special Considerations

Since the type of `BOOL` is actually `char`, it does not behave in the same way as a C `_Bool` value or a C++ *bool* value. For example, the conditional in the following code will be false on i386 (and true on PPC):

```objc
- (BOOL)value {
    return 256;
}
// then
if ([self value]) doStuff();
```

By contrast, the conditional in the following code will be true on all platforms (even where `sizeof(bool) == 1`):

```objc
- (bool)value {
    return 256;
}
// then
if ([self value]) doStuff();
```

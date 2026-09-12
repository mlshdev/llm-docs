> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccomposition/identifier()](https://developer.apple.com/documentation/quartz/qccomposition/identifier())

# identifier() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the unique and persistent identifier for the composition from the composition repository.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func identifier() -> String!
```

<a id="return-value"></a>

## Return Value

The unique identifier for the composition if it comes from the composition repository; `nil` otherwise.

## See Also

### Getting Information About a Composition

- [attributes()](attributes%28%29.md): Deprecated. Returns the attributes of the composition.
- [protocols()](protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.

# identifier (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the unique and persistent identifier for the composition from the composition repository.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSString *) identifier;
```

<a id="return-value"></a>

## Return Value

The unique identifier for the composition if it comes from the composition repository; `nil` otherwise.

## See Also

### Getting Information About a Composition

- [attributes](attributes%28%29.md): Deprecated. Returns the attributes of the composition.
- [protocols](protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.

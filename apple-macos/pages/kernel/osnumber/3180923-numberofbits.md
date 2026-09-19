> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osnumber/3180923-numberofbits

# numberOfBits

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the number of bits the OSNumber was created with.

## Declaration

```objectivec
size_t numberOfBits(void);
```

```objectivec
virtual unsigned int numberOfBits(void);
```

<a id="return_value"></a>

## Return Value

Returns the number of bits the OSNumber was created with.

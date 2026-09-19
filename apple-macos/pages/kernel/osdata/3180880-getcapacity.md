> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osdata/3180880-getcapacity

# getCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns length of preallocated capacity.

## Declaration

```objectivec
size_t getCapacity(void);
```

```objectivec
virtual unsigned int getCapacity(void);
```

<a id="return_value"></a>

## Return Value

length of preallocated capacity.

## See Also

### Inspecting a Data Object

- [getLength](3180881-getlength.md): Returns length of data present.

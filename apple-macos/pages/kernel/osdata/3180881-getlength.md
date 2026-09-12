> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3180881-getlength](https://developer.apple.com/documentation/kernel/osdata/3180881-getlength)

# getLength

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns length of data present.

## Declaration

```objectivec
size_t getLength(void);
```

```objectivec
virtual unsigned int getLength(void);
```

<a id="return_value"></a>

## Return Value

length of data present.

## See Also

### Inspecting a Data Object

- [getCapacity](3180880-getcapacity.md): Returns length of preallocated capacity.

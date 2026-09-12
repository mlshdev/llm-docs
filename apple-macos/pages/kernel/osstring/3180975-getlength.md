> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3180975-getlength](https://developer.apple.com/documentation/kernel/osstring/3180975-getlength)

# getLength

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns length of string not including null terminator.

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

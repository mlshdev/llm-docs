> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osmetaclassbase/3181053-dispatch](https://developer.apple.com/documentation/kernel/osmetaclassbase/3181053-dispatch)

# Dispatch

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 15.4+

Runtime internals

## Declaration

```objectivec
virtual kern_return_t Dispatch(IORPC invoke);
```

```objectivec
virtual kern_return_t Dispatch(const IORPC rpc);
```

## See Also

### Managing Runtime Internals

- [Invoke](3181056-invoke.md): Runtime internals

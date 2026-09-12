> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/init()](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/init())

# init() (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new Rosetta directory share, or returns an error if Rosetta isn’t installed.

## Declaration

```swift
init() throws
```

<a id="Discussion"></a>

## Discussion

Check the status of Rosetta by examining the [availability](availability.md) class property before creating a new Rosetta directory share to ensure the capability is both supported and available on host Mac. For complete instructions on installing Rosetta see doc:running-intel-binaries-in-linux-vms-with-rosetta.

# initWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a new Rosetta directory share, or returns an error if Rosetta isn’t installed.

## Declaration

```objectivec
- (instancetype) initWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Check the status of Rosetta by examining the [availability](availability.md) class property before creating a new Rosetta directory share to ensure the capability is both supported and available on host Mac. For complete instructions on installing Rosetta see doc:running-intel-binaries-in-linux-vms-with-rosetta.

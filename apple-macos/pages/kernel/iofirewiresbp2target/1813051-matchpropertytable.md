> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2target/1813051-matchpropertytable](https://developer.apple.com/documentation/kernel/iofirewiresbp2target/1813051-matchpropertytable)

# matchPropertyTable

**Interface language:** Objective-C

**Framework:** Kernel

Implements SBP2 specific matching.

## Declaration

```objectivec
virtual bool matchPropertyTable(
 OSDictionary *table ); 
```

## Parameters

- `table`: The dictionary of properties to be matched against.

<a id="return_value"></a>

## Return Value

Returns false if the family considers the matching dictionary does not match in properties it understands, true otherwise.

<a id="overview"></a>

## Overview

See IOService for discussion.

## See Also

### Miscellaneous

- [getFireWireUnit](1812999-getfirewireunit.md): Returns an IOFireWireUnit object.
- [handleClose](1813009-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleIsOpen](1813021-handleisopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813037-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [start](1813074-start.md): During an IOService instantiation, the start method is called when the IOService has been selected to run on the provider.
- [stop](1813099-stop.md): During an IOService termination, the stop method is called in its clients before they are detached & it is destroyed.

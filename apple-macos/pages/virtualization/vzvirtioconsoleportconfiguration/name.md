> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportconfiguration/name](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportconfiguration/name)

# name (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the port.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default behavior is to not use a name unless set.

## See Also

### Configuring the port

- [isConsole](isconsole.md): A Boolean value that indicates whether this port is a console.

# name (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the port.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The default behavior is to not use a name unless set.

## See Also

### Configuring the port

- [isConsole](isconsole.md): A Boolean value that indicates whether this port is a console.

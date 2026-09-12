> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportconfiguration/isconsole](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportconfiguration/isconsole)

# isConsole (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether this port is a console.

## Declaration

```swift
var isConsole: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The framework may mark the console port for use as the system console. The default is `false`.

## See Also

### Configuring the port

- [name](name.md): The name of the port.

# isConsole (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether this port is a console.

## Declaration

```objectivec
@property BOOL isConsole;
```

<a id="Discussion"></a>

## Discussion

The framework may mark the console port for use as the system console. The default is `false`.

## See Also

### Configuring the port

- [name](name.md): The name of the port.

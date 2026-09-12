> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsservices/nskeyequivalent](https://developer.apple.com/documentation/bundleresources/information-property-list/nsservices/nskeyequivalent)

# NSKeyEquivalent

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

A keyboard shortcut that invokes the service menu command.

## Details

`NSKeyEquivalent`

## Properties

- `default` — `string` (required):

<a id="Discussion"></a>

## Discussion

The dictionary key is `default` with a string value.

## See Also

### Invocation

- [NSMenuItem](nsmenuitem.md): Text for a Services menu item.
- [NSMessage](nsmessage.md): An instance method that invokes the service.
- [NSPortName](nsportname.md): The port that the service monitors for incoming requests.
- [NSTimeout](nstimeout.md): The amount of time, in milliseconds, that the system waits for a response from the service.

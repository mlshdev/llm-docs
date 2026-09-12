> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domapplicationcache/1631599-onprogress](https://developer.apple.com/documentation/webkitjs/domapplicationcache/1631599-onprogress)

# onprogress

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Sent when each resource in the manifest file begins to download.

## Declaration

```
attribute EventHandler onprogress;
```

## See Also

### Handling Events

- [onchecking](1634093-onchecking.md): Sent when the cache update process begins.
- [onerror](1629048-onerror.md): Sent when an error occurs.
- [onnoupdate](1631877-onnoupdate.md): Sent when the update process finishes but the manifest file does not change.
- [ondownloading](1632146-ondownloading.md): Sent when the update process begins downloading resources in the manifest file.
- [onupdateready](1629348-onupdateready.md): Sent when there is an existing application cache, the update process finishes, and there is a new application cache ready for use.
- [oncached](1632145-oncached.md): Sent when the update process finishes for the first time—that is, the first time an application cache is saved.

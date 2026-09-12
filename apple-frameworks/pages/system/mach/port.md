> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port](https://developer.apple.com/documentation/system/mach/port)

# Mach.Port

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

## Declaration

```swift
struct Port<RightType> where RightType : MachPortRight
```

## Topics

### Initializers

- [init()](port/init%28%29.md): Conforms when `RightType` is `Mach.ReceiveRight`. Allocate a new Mach port with a receive right, creating a Mach.Port\<Mach.ReceiveRight\> to manage it.
- [init(name:)](port/init%28name_%29.md): Transfer ownership of an existing unmanaged Mach port right into a `Mach.Port` by name.
- [init(name:context:)](port/init%28name_context_%29-14mp9.md): Conforms when `RightType` is `Mach.ReceiveRight`. Transfer ownership of an existing, unmanaged, but already guarded, Mach port right into a Mach.Port by name.
- [init(name:context:)](port/init%28name_context_%29-oyjl.md): Conforms when `RightType` is `Mach.ReceiveRight`. Transfer ownership of an existing, unmanaged, but already guarded, Mach port right into a Mach.Port by name.

### Instance Properties

- [makeSendCount](port/makesendcount.md): Conforms when `RightType` is `Mach.ReceiveRight`. Access the make-send count.

### Instance Methods

- [copySendRight()](port/copysendright%28%29.md): Conforms when `RightType` is `Mach.SendRight`. Create another send right from a given send right.
- [makeSendOnceRight()](port/makesendonceright%28%29.md): Conforms when `RightType` is `Mach.ReceiveRight`. Create a send-once right for a given receive right.
- [makeSendRight()](port/makesendright%28%29.md): Conforms when `RightType` is `Mach.ReceiveRight`. Create a send right for a given receive right.
- [relinquish()](port/relinquish%28%29-241tg.md): Conforms when `RightType` is `Mach.SendOnceRight`. Transfer ownership of the underlying port right to the caller.
- [relinquish()](port/relinquish%28%29-70vbe.md): Conforms when `RightType` is `Mach.ReceiveRight`. Transfer ownership of the underlying port right to the caller.
- [relinquish()](port/relinquish%28%29-74amu.md): Conforms when `RightType` is `Mach.SendRight`. Transfer ownership of the underlying port right to the caller.
- [relinquish()](port/relinquish%28%29-9lm56.md): Conforms when `RightType` is `Mach.ReceiveRight`. Transfer ownership of the underlying port right to the caller.
- [unguardAndRelinquish()](port/unguardandrelinquish%28%29.md): Conforms when `RightType` is `Mach.ReceiveRight`. Remove guard and transfer ownership of the underlying port right to the caller.
- [withBorrowedName(body:)](port/withborrowedname%28body_%29-4d4iq.md): Conforms when `RightType` is `Mach.ReceiveRight`. Borrow access to the port name in a block that can perform non-consuming operations.
- [withBorrowedName(body:)](port/withborrowedname%28body_%29-8402i.md): Conforms when `RightType` is `Mach.ReceiveRight`. Borrow access to the port name in a block that can perform non-consuming operations.
- [withBorrowedName(body:)](port/withborrowedname%28body_%29-9v68k.md): Borrow access to the port name in a block that can perform non-consuming operations.

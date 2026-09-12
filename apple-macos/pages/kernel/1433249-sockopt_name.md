> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1433249-sockopt_name](https://developer.apple.com/documentation/kernel/1433249-sockopt_name)

# sockopt_name

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Declaration

```objectivec
int sockopt_name(sockopt_t sopt);
```

## Parameters

- `sopt`: The socket option.

<a id="return_value"></a>

## Return Value

The socket option name. See man 2 setsockopt

<a id="discussion"></a>

## Discussion

Retrieves the socket option name. (SO_SNDBUF, etc).

## See Also

### Network Kernel Extensions

- [sock_accept](1396149-sock_accept.md): Deprecated.
- [sock_bind](1396145-sock_bind.md): Deprecated.
- [sock_close](1396134-sock_close.md): Deprecated.
- [sock_connect](1396120-sock_connect.md): Deprecated.
- [sock_getpeername](1396137-sock_getpeername.md): Deprecated.
- [sock_getsockname](1396141-sock_getsockname.md): Deprecated.
- [sock_getsockopt](1396136-sock_getsockopt.md): Deprecated.
- [sock_gettype](1396147-sock_gettype.md): Deprecated.
- [sock_inject_data_in](1433192-sock_inject_data_in.md): Deprecated.
- [sock_inject_data_out](1433162-sock_inject_data_out.md): Deprecated.
- [sock_ioctl](1396118-sock_ioctl.md): Deprecated.
- [sock_isconnected](1396130-sock_isconnected.md): Deprecated.
- [sock_isnonblocking](1396116-sock_isnonblocking.md): Deprecated.
- [sock_listen](1396139-sock_listen.md): Deprecated.
- [sock_receive](1396126-sock_receive.md): Deprecated.
- [sock_receivembuf](1396114-sock_receivembuf.md): Deprecated.
- [sock_send](1396143-sock_send.md): Deprecated.
- [sock_sendmbuf](1396128-sock_sendmbuf.md): Deprecated.
- [sock_setpriv](1396124-sock_setpriv.md): Deprecated.
- [sock_setsockopt](1396148-sock_setsockopt.md): Deprecated.
- [sock_shutdown](1396150-sock_shutdown.md): Deprecated.
- [sock_socket](1396122-sock_socket.md): Deprecated.
- [sockopt_copyin](1433166-sockopt_copyin.md): Deprecated.
- [sockopt_copyout](1433176-sockopt_copyout.md): Deprecated.
- [sockopt_direction](1433253-sockopt_direction.md): Deprecated.
- [sockopt_level](1433193-sockopt_level.md): Deprecated.
- [sockopt_valsize](1433272-sockopt_valsize.md): Deprecated.
- [ifaddr_address](1525073-ifaddr_address.md): Deprecated.
- [ifaddr_address_family](1524915-ifaddr_address_family.md): Deprecated.
- [ifaddr_dstaddress](1525058-ifaddr_dstaddress.md): Deprecated.
- [ifaddr_findbestforaddr](1525009-ifaddr_findbestforaddr.md): Deprecated.
- [ifaddr_ifnet](1524949-ifaddr_ifnet.md): Deprecated.
- [ifaddr_netmask](1525132-ifaddr_netmask.md): Deprecated.
- [ifaddr_reference](1525060-ifaddr_reference.md): Deprecated.
- [ifaddr_release](1524928-ifaddr_release.md): Deprecated.
- [ifaddr_withaddr](1524859-ifaddr_withaddr.md): Deprecated.
- [ifaddr_withdstaddr](1525107-ifaddr_withdstaddr.md): Deprecated.
- [ifaddr_withnet](1524842-ifaddr_withnet.md): Deprecated.
- [ifaddr_withroute](1524963-ifaddr_withroute.md): Deprecated.
- [iflt_attach](1589956-iflt_attach.md): Deprecated.
- [iflt_detach](1589950-iflt_detach.md): Deprecated.
- [ifmaddr_address](1524853-ifmaddr_address.md): Deprecated.
- [ifmaddr_ifnet](1525101-ifmaddr_ifnet.md): Deprecated.
- [ifmaddr_lladdress](1525091-ifmaddr_lladdress.md): Deprecated.
- [ifmaddr_reference](1524890-ifmaddr_reference.md): Deprecated.
- [ifmaddr_release](1525024-ifmaddr_release.md): Deprecated.
- [ifnet_add_multicast](1524976-ifnet_add_multicast.md): Deprecated.
- [ifnet_addrlen](1524855-ifnet_addrlen.md): Deprecated.
- [ifnet_allocate](1525028-ifnet_allocate.md): Deprecated.
- [ifnet_attach](1524922-ifnet_attach.md): Deprecated.
- [ifnet_attach_protocol](1525004-ifnet_attach_protocol.md): Deprecated.
- [ifnet_attach_protocol_v2](1525131-ifnet_attach_protocol_v2.md): Deprecated.
- [ifnet_baudrate](1524866-ifnet_baudrate.md): Deprecated.
- [ifnet_capabilities_enabled](1525016-ifnet_capabilities_enabled.md): Deprecated.
- [ifnet_capabilities_supported](1524931-ifnet_capabilities_supported.md): Deprecated.
- [ifnet_detach](1524903-ifnet_detach.md): Deprecated.
- [ifnet_detach_protocol](1525007-ifnet_detach_protocol.md): Deprecated.
- [ifnet_event](1524986-ifnet_event.md): Deprecated.
- [ifnet_family](1524921-ifnet_family.md): Deprecated.
- [ifnet_find_by_name](1525072-ifnet_find_by_name.md): Deprecated.
- [ifnet_flags](1525111-ifnet_flags.md): Deprecated.
- [ifnet_free_address_list](1524991-ifnet_free_address_list.md): Deprecated.
- [ifnet_free_multicast_list](1524898-ifnet_free_multicast_list.md): Deprecated.
- [ifnet_get_address_list](1525146-ifnet_get_address_list.md): Deprecated.
- [ifnet_get_address_list_family](1525142-ifnet_get_address_list_family.md): Deprecated.
- [ifnet_get_link_mib_data](1524988-ifnet_get_link_mib_data.md): Deprecated.
- [ifnet_get_link_mib_data_length](1524864-ifnet_get_link_mib_data_length.md): Deprecated.
- [ifnet_get_multicast_list](1525020-ifnet_get_multicast_list.md): Deprecated.
- [ifnet_get_tso_mtu](1524965-ifnet_get_tso_mtu.md): Deprecated.
- [ifnet_get_wake_flags](1524907-ifnet_get_wake_flags.md): Deprecated.
- [ifnet_hdrlen](1524895-ifnet_hdrlen.md): Deprecated.
- [ifnet_index](1525041-ifnet_index.md): Deprecated.
- [ifnet_input](1525087-ifnet_input.md): Deprecated.
- [ifnet_interface_family_find](1524844-ifnet_interface_family_find.md): Deprecated.
- [ifnet_ioctl](1525082-ifnet_ioctl.md): Deprecated.
- [ifnet_lastchange](1525140-ifnet_lastchange.md): Deprecated.
- [ifnet_list_free](1524868-ifnet_list_free.md): Deprecated.
- [ifnet_list_get](1524913-ifnet_list_get.md): Deprecated.
- [ifnet_lladdr_copy_bytes](1525069-ifnet_lladdr_copy_bytes.md): Deprecated.
- [ifnet_llbroadcast_copy_bytes](1525030-ifnet_llbroadcast_copy_bytes.md): Deprecated.
- [ifnet_metric](1524964-ifnet_metric.md): Deprecated.
- [ifnet_mtu](1524959-ifnet_mtu.md): Deprecated.
- [ifnet_name](1524885-ifnet_name.md): Deprecated.
- [ifnet_offload](1524854-ifnet_offload.md): Deprecated.
- [ifnet_output](1525046-ifnet_output.md): Deprecated.
- [ifnet_output_raw](1525049-ifnet_output_raw.md): Deprecated.
- [ifnet_reference](1524857-ifnet_reference.md): Deprecated.
- [ifnet_release](1525052-ifnet_release.md): Deprecated.
- [ifnet_remove_multicast](1524982-ifnet_remove_multicast.md): Deprecated.
- [ifnet_resolve_multicast](1525080-ifnet_resolve_multicast.md): Deprecated.
- [ifnet_set_addrlen](1524861-ifnet_set_addrlen.md): Deprecated.
- [ifnet_set_baudrate](1525090-ifnet_set_baudrate.md): Deprecated.
- [ifnet_set_capabilities_enabled](1524938-ifnet_set_capabilities_enabled.md): Deprecated.
- [ifnet_set_capabilities_supported](1525144-ifnet_set_capabilities_supported.md): Deprecated.
- [ifnet_set_flags](1524996-ifnet_set_flags.md): Deprecated.
- [ifnet_set_hdrlen](1525097-ifnet_set_hdrlen.md): Deprecated.
- [ifnet_set_link_mib_data](1525120-ifnet_set_link_mib_data.md): Deprecated.
- [ifnet_set_lladdr](1524891-ifnet_set_lladdr.md): Deprecated.
- [ifnet_set_metric](1524932-ifnet_set_metric.md): Deprecated.
- [ifnet_set_mtu](1524919-ifnet_set_mtu.md): Deprecated.
- [ifnet_set_offload](1524961-ifnet_set_offload.md): Deprecated.
- [ifnet_set_promiscuous](1524973-ifnet_set_promiscuous.md): Deprecated.
- [ifnet_set_stat](1524994-ifnet_set_stat.md): Deprecated.
- [ifnet_set_tso_mtu](1525098-ifnet_set_tso_mtu.md): Deprecated.
- [ifnet_set_wake_flags](1525070-ifnet_set_wake_flags.md): Deprecated.
- [ifnet_softc](1524952-ifnet_softc.md): Deprecated.
- [ifnet_stat](1525068-ifnet_stat.md): Deprecated.
- [ifnet_stat_increment](1525065-ifnet_stat_increment.md): Deprecated.
- [ifnet_stat_increment_in](1525002-ifnet_stat_increment_in.md): Deprecated.
- [ifnet_stat_increment_out](1525085-ifnet_stat_increment_out.md): Deprecated.
- [ifnet_touch_lastchange](1524957-ifnet_touch_lastchange.md): Deprecated.
- [ifnet_type](1524954-ifnet_type.md): Deprecated.
- [ifnet_unit](1525055-ifnet_unit.md): Deprecated.

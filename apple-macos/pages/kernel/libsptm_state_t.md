> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/libsptm_state_t](https://developer.apple.com/documentation/kernel/libsptm_state_t)

# libsptm_state_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 15.4+

## Declaration

```objectivec
typedef struct sptm_client_state {
    ...
} libsptm_state_t;
```

## Topics

### Instance Properties

- [cpu_features](libsptm_state_t/4540779-cpu_features.md)
- [feature_flags](libsptm_state_t/4540780-feature_flags.md)
- [first_papt](libsptm_state_t/4540781-first_papt.md)
- [first_phys](libsptm_state_t/4540782-first_phys.md)
- [frame_table](libsptm_state_t/4540783-frame_table.md)
- [frame_type_params](libsptm_state_t/4540784-frame_type_params.md)
- [io_frame_table](libsptm_state_t/4540785-io_frame_table.md)
- [last_papt](libsptm_state_t/4540786-last_papt.md)
- [last_phys](libsptm_state_t/4540787-last_phys.md)
- [max_cpus](libsptm_state_t/4540788-max_cpus.md)
- [n_io_ranges](libsptm_state_t/4540789-n_io_ranges.md)
- [n_papt_ranges](libsptm_state_t/4540790-n_papt_ranges.md)
- [papt_ranges](libsptm_state_t/4540791-papt_ranges.md)
- [percpu_dispatch_state](libsptm_state_t/4540792-percpu_dispatch_state.md)
- [percpu_xnu_saved_state](libsptm_state_t/4540793-percpu_xnu_saved_state.md)
- [pt_attr_table](libsptm_state_t/4540794-pt_attr_table.md)
- [reserved](libsptm_state_t/4540795-reserved.md)
- [root_table_paddr](libsptm_state_t/4540796-root_table_paddr.md)
- [sptm_first_tag_storage_paddr](libsptm_state_t/4540797-sptm_first_tag_storage_paddr.md)
- [sptm_last_tag_storage_paddr](libsptm_state_t/4540798-sptm_last_tag_storage_paddr.md)
- [sptm_panicking_cpu_id](libsptm_state_t/4540799-sptm_panicking_cpu_id.md)
- [trace_buffer](libsptm_state_t/4540800-trace_buffer.md)
- [version](libsptm_state_t/4540801-version.md)

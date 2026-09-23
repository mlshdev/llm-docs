> Pinned source for Runpod main: [community-solutions/ssh-password-migration/overview.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/community-solutions/ssh-password-migration/overview.mdx)
> Canonical documentation: https://docs.runpod.io/community-solutions/ssh-password-migration/overview

# SSH password setup & migration tools

Simple tools for migrating data between Runpod instances. Review installation, configuration, and usage guidance for this community solution on Runpod.

## What are these tools?

These are simple bash and Python scripts that solve a critical problem: **migrating data between Runpod instances when you need to move Pods** (e.g., when your Pod gets stuck with zero GPUs or you need to switch to a different instance).

> **Note**
>
> Check the repository for additional features, updates, and documentation: [github.com/justinwlin/Runpod-SSH-Password](https://github.com/justinwlin/Runpod-SSH-Password)

## The problem it solves

When Runpod users encounter issues like:

- Pod stuck with **zero GPUs allocated**.
- Need to **migrate to a different GPU type**.
- Want to **transfer data between Pods**.
- Need to **backup data before terminating a Pod**.

This tool provides a simple solution for transferring your files to a new Pod.

## Requirements

Before using these tools, make sure you have:

1. **Terminal access** on your Runpod instances:
   - Web Terminal in Runpod's interface, or
   - Terminal in Jupyter Notebook/Lab

2. **Port 22 exposed** on destination Pod / source Pod:

   - Go to: **Pod > Edit Pod > TCP Ports**
   - Add port `22` if not present

   > **Warning**
   >
   > **Important**: Changing TCP ports will restart your Pod and **erase all data outside of `/workspace`**. Make sure all important files are stored in `/workspace` (the default persistent directory) before making port changes.

3. **Linux-based template**: Works on Ubuntu/Debian images (most Runpod templates)

## Quick migration workflow

1. On your **destination Pod** (where you're migrating to):

   ```bash
   wget https://raw.githubusercontent.com/justinwlin/Runpod-SSH-Password/main/passwordrunpod.sh && chmod +x passwordrunpod.sh && ./passwordrunpod.sh
   ```

   The script will prompt you to set a password. After setup, it displays your connection details:

   ```
   You can now connect using: ssh root@213.173.105.86 -p 17958
   Password: [the password you just set]
   ```

   **Save these details** - you'll need them in Step 4.
2. On your **source Pod** (where your files currently are):

   ```bash
   wget https://raw.githubusercontent.com/justinwlin/Runpod-SSH-Password/refs/heads/main/SCPMigration -O scp_migration.py && python3 scp_migration.py
   ```
3. The tool provides an interactive interface:

   **Navigation Mode** - Browse directories:

   ```
   Current directory: /workspace

   Navigate by entering a number:
    1. models/
    2. data/
    3. ComfyUI/
    
   Navigate to: 1    (enters models folder)
   Navigate to: s    (switch to selection mode)
   ```

   **Selection Mode** - Choose what to transfer:

   ```
   Select item: 1    (selects folder/file)
   ```
4. Enter the SSH details from Step 1:

   ```
   Enter SSH command: ssh root@213.173.105.86 -p 17958
   Enter password: [the password you set in Step 1]
   ```

   The tool will:

   - **Files**: Transfer directly via SCP
   - **Folders**: Compress to ZIP, transfer, then extract automatically

## Key features

- **Interactive navigation**: Browse files with simple number selection
- **Smart compression**: Automatically zips folders for reliable transfer
- **Mode switching**: Press `s` for selection, `n` for navigation
- **Clean transfer**: Auto-extracts and cleans up on destination

## Related resources

- [Managing Pods](https://docs.runpod.io/pods/manage-pods)
- [Pod storage overview](https://docs.runpod.io/pods/storage/types)
- [Network volumes](https://docs.runpod.io/storage/network-volumes)
